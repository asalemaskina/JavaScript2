var str = "Hannah said- 'OMG, I can't!'.";
console.log(str.replace(/(?!s'|[a-z]'[a-z])([\s\S])'|^'/g, '$1"'));

