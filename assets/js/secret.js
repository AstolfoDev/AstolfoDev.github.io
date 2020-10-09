let messages = [
    "Now this looks like a job for me",
    "System.out.println(\"bruh\");",
    "Sponsored by Pacific Krabby Patty",
    "Sponsored by Tescos",
    "u fuckin wot m8",
    "oh yeah oh yeah oh yeah",
    "owouwuowo",
    "as seen on github",
    "this code is brought to you by RAID shadow legends",
    "there is one error among us",
    "st0nkz",
    "little gay lookin' json, so gay i can barely parse it with a straight face lookin boi"
];

const console = () => {
    if (document.getElementById("console-easteregg") == null) return;
    document.getElementById("console-easteregg").innerText = messages[Math.floor(Math.random()*messages.length)]+" (END)";
}