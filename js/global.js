// some bits of code that is required by other code
/**
 * Shortcut for getElementById
 * @param {string} id
 */
const byId = id => document.getElementById(id);

/**
 * Shortcut for a click addEventListener
 * @param {string} id - The ID of element the listener will be attached to
 * @param {Function} cb - The callback function that's executed when a user clicks the element
 */
const click = (id, cb) => byId(id).addEventListener('click', (e) => {
    cb(e);
});

// dont touch this, it makes the loading screen work
setTimeout(() => {
    byId('loading').classList.add('opacity-0');
    setTimeout(() => {
        byId('loading').style.display = 'none';
    }, 500);
}, 1000);

setTimeout(() => {
    byId('cnloadhide').style.display = 'none';
    setTimeout(() => {
        byId('cnloadhide').style.display = 'block';
    }, 500);
}, 1000);