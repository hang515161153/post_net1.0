'use strict';
class Shell {
    constructor(router, repl) {
        this.router = router;
        this.repl = repl;
    }
    start() {
        this.router.start();
        this.repl.start({
            prompt: '->', eval: (cmd, context, filename, callback) => {

                this.router.handle(cmd.trim(),function (text) {
                    callback(null,text);
                });
                this.router.start();



            }
        });
    }
}
module.exports = Shell;



