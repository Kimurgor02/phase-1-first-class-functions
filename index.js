const spy = chai.spy();
function receivesAFunction(spy) {
    spy();
}
function returnsANamedFunction() {
    const fn =(we, al)=> we + al;
    return fn;
}
 function returnsAnAnonymousFunction() {
    return ()=> par1;
 }