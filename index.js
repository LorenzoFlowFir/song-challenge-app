//server.js
const express = require("express");
const cors = require("cors");
const Discord = require("discord.js");
const bot = new Discord.Client({ intents: 3276799 });
const app = express();

app.use(cors());

bot.login(
  "MTE1OTE3NDIyNDE5MjIyOTQ1Nw.Gf-c3B.qmCIfVVugaDcjmsvMzXrWJ4gMRzYdXouio_g1w"
);

const channelID = "908744072024457217"; // Remplacez par l'ID de votre salon

app.get("/get-discord-data", async (req, res) => {
  try {
    const channel = await bot.channels.fetch(channelID);
    if (channel.type == 0) {
      const messages = await channel.messages.fetch({ limit: 100 });
      const coverUrls = [];
      const titre = [];
      const date = [];
      messages.forEach((message) => {
        message.attachments.each((attachment) => {
          coverUrls.push(attachment.url);
        });

        // Extract Title using regex
        const titleMatch = message.content.match(/Name: (.*?)\n/);
        if (titleMatch && titleMatch[1]) {
          titre.push(titleMatch[1]);
        }

        // Format the creation timestamp to dd/MM/YYYY
        const messageDate = new Date(message.createdTimestamp);
        const formattedDate =
          messageDate.getDate().toString().padStart(2, "0") +
          "/" +
          (messageDate.getMonth() + 1).toString().padStart(2, "0") +
          "/" +
          messageDate.getFullYear();
        date.push(formattedDate);
      });
      // Send back all data in a single JSON object
      res.json({ coverUrls, titre, date });
    } else {
      res.status(400).send("Channel is not a text channel");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(5555, () => {
  console.log(
    "Server is running on port 5555/get-discord-data"
  );
});
