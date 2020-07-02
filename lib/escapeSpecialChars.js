module.exports = function(value) {
  return (value && typeof value === 'string') 
    ? value.replace(/[%&$@';?*]/g, (c) => '%' + c.charCodeAt(0).toString(16))
    : ''
}