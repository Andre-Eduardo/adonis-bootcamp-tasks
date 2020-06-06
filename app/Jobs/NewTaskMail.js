'use strict';

const Mail = use('Mail');
const Helpers = use('Helpers');

class NewTaskMail {
  static get concurrency() {
    return 1;
  }

  static get key() {
    return 'NewTaskMail-job';
  }

  async handle({ email, username, title, file }) {
    await Mail.send(
      ['eamils.new_task'],
      { username, title, hasAttachment: file },
      message => {
        message
          .to(email)
          .from('Andre.eduardo@test.com.br', 'Andre Eduardo')
          .subject('Nova tarefa para você');

        if (file) {
          message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
            filename: file.name,
          });
        }
      }
    );
  }
}

module.exports = NewTaskMail;
