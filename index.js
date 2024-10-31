const { execSync } = require('child_process');

// Function to check and install discord.js-selfbot-v13 if not installed
function checkAndInstall(packageName) {
    try {
        require.resolve(packageName);
    } catch (e) {
        console.log(`${packageName} not found. Installing...`);
        execSync(`npm install ${packageName}`, { stdio: 'inherit' });
        console.log(`${packageName} installed successfully.`);
    }
}

// Check and install discord.js-selfbot-v13 if missing
checkAndInstall('discord.js-selfbot-v13');

const { Client } = require('discord.js-selfbot-v13');

const client = new Client({
    checkUpdate: false
});

client.on('ready', () => {
    console.log(`Client is ready and logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === 'test' && message.author.id !== client.user.id) {
        try {
            await message.reply('Test worked!');
        } catch (error) {
            console.error('Failed to reply to message:', error);
        }
    }
});

client.login('MTIxNzEwNzQ0OTQ4NDY3NzE2MA.GuNF3C.FssRpW-YoorwRvIIpgYjYGNWnz4yeB2Z9ymwnY').catch((error) => {
    console.error('Login failed:', error);
});
