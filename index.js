const { Plugin } = require('powercord/entities');
const { messages: MessageEvents } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');

const { zeWords } = require('./components/chemWords.js');

module.exports = class ChemWords extends Plugin {
    async startPlugin() {
        powercord.api.commands.registerCommand({
            command: "chem",
            description: "Translate text into chemicals",
            usage: "{c} [text]",
            executor: (args) => {
                return {
                    send: true,
                    result: zeWords(args.join(' '))
                }
            }
        });
    }

    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('chem');
    }
}