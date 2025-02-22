// @ts-check
import antfu from '@antfu/eslint-config';

export default antfu({
  type: 'app',
  typescript: true,
  lessOpinionated: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: 'single',
  },
}, {
  rules: {
    'ts/explicit-function-return-type': ['off'],
    'node/prefer-global/process': ['off'],
    'perfectionist/sort-imports': ['error', {
      tsconfigRootDir: '.',
    }],
    'unicorn/filename-case': ['error', {
      case: 'kebabCase',
      ignore: ['^.*\.md$'],
    }],
  },
});
