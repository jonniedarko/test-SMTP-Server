#Test SMTP Server
A Simple server to catch all mails and save as basic text files

###To use

1. Include in node_module.
  - currently not published, needs to be manually included
2. inside the sample app or test-app include:
  ```js
  var smtp = require('testSMTPServer').run;
  // 2525 is the port it will run on, the emails will be saved inside the tmp folder of the root
  smtp(2525, path.join(__dirname, '../../../', 'tmp'));
  ```
3. edit the config for mailer
  - change the Host to `localhost` and the port to what ever you have use as explained above
4. run you application as normal without worrying about email being sent to someone they shouldn't be or without fear of them being rejected

#### Possible improvements
 - api to access contents of email from within tests
 - GUI to view mails

