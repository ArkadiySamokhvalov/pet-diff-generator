import _ from 'lodash';

const buildTree = (file1, file2) => {
  const file1Keys = _.keys(file1);
  const file2Keys = _.keys(file2);
  const sortedKeys = _.sortBy(_.union(file1Keys, file2Keys));

  return sortedKeys.map((key) => {
    let state = 'notChanged';
    let value = file1[key];

    if (!_.has(file1, key)) {
      state = 'added';
      value = file2[key];
    } else if (!_.has(file2, key)) {
      state = 'deleted';
    } else if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      state = 'nested';
      value = buildTree(file1[key], file2[key]);
    } else if (!_.isEqual(file1[key], file2[key])) {
      state = 'changed';
      return {
        key, state, value1: file1[key], value2: file2[key],
      };
    }

    return { key, state, value };
  });
};

export default buildTree;
