const console = () => {
    let messages = [
        "Now this looks like a job for me",
        "System.out.println(\"bruh\");",
        "Sponsored by Pacific Krabby Patty",
        "Sponsored by Tescos",
        "u fuckin wot m8",
        "wagwan mah G",
        "oh yeah oh yeah oh yeah",
        "owouwuowo",
        "as seen on github",
        "this code is brought to you by RAID shadow legends",
        "1 pound fish",
        "there is one error among us",
        "3 pound meal deal",
        "pump it",
        "st0nkz",
        "let's get it started in here",
        "no he can't read my poker face",
        "little gay lookin' json, so gay i can barely parse it with a straight face lookin boi"
    ];
    document.getElementById("console-easteregg").innerText = messages[Math.floor(Math.random()*messages.length)]+" (END)";
}