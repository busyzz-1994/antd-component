import preval from 'preval.macro';

const language = preval`module.exports =JSON.parse(require('fs').readFileSync(__dirname + '/' + process.env.REACT_APP_LANGUAGE + '.json', 'utf8'))`;

if (process.env.NODE_ENV !== 'production') {
  console.log('language', language);
}

/**
 * 备用的多语言支持
 */
export default language;
