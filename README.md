# GenioChat

A simple web based application developed using React.js. The App consists of multi components which are nested together to produce single page app.

### Instlation

It is required that you have already instlled `Node.js` and `React.js`

```
git clone https://github.com/mohammedmrm/genioChat.git
```

```
cd genioChat
```

```
npm install
```

> ## **NOTE IMPORTANT Please Delete the extra `;` in `./node_modules/semantic-ui-css/semantic.min.css` and in `./node_modules/semantic-ui-css/semantic.css`**

open each file and `ctrl+f` search for `;;` and replaced with `;` and save it

This is a bug in `semantic-ui-css`

Next you can start the App\*\*\*

```
npm start
```

### The hierarchy of the Components

![alt text](https://github.com/mohammedmrm/genioChat/blob/main/Doc/Components.drawio.png)

## Functionalities of the App

- Chat alignment of messages depends on who is the sender and who the Reciver. This was implemented based on specific value in the messages array “sendby”.

- Human Friendly Datetime. This was done using “npm package” called “react-moment”.

- Close and open chat box button. A toggle button used to hide or show the chat box based on the status of Boolean variable.

- Unseen badge. Label used to show number of unseen messages while the chat box close.

- Message Reaction. When the user moves the mouse over the message text a popup will appear to allow the user to make reaction on the message.

- Emoji Box. In the Chat form there is an icon button used to display a popup when the mouse moves over it. When the user clicks on an emoji it will append this to the text input.

- Peer is typing, the user will be notified on the other chat box will typing a message.

- Message Delete: when the user Double click the message a prompt will appear to delete the message or cancel for discard deleting.

## Some Screenshots of the App

### chat window

![alt text](https://github.com/mohammedmrm/genioChat/blob/main/Doc/normal.PNG)

### hide one chat box and show its unseen message number

![alt text](https://github.com/mohammedmrm/genioChat/blob/main/Doc/hiddenbox.PNG)

### Popup of emoji that can be add to the text of the message

![alt text](https://github.com/mohammedmrm/genioChat/blob/main/Doc/emoji.png)

### Popup for The reaction on messages

![alt text](https://github.com/mohammedmrm/genioChat/blob/main/Doc/reaction.png)
