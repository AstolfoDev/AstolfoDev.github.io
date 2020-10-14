let char = 0;

let lines = {
    1: true,
    2: false,
    3: false,
    4: false
};

const typewriter = async () => {
    const text = {
        1: "cd ./secret_stash",
        2: "less -FX languages.txt"
    };

    const speed = {
        "fast": 50,
        "normal": 125
    };

    if (lines["1"]) {
        document.getElementById("console-line-1").innerHTML += text["1"].charAt(char);
        char += 1;

        if (char === text["1"].length) {
            lines["1"] = false;
            lines["2"] = true;

            char = 0;
        }
        setTimeout(typewriter, speed["fast"]);
    }

    if (lines["2"]) {
        if (document.getElementById("console-line-2").innerHTML === "&nbsp;") {
            document.getElementById("console-line-2").innerHTML = "secret_stash astolfodev$ "
            setTimeout(typewriter, speed["normal"]);
        } else {
            document.getElementById("console-line-2").innerHTML += text["2"].charAt(char);
            char += 1;

            if (char === text["2"].length) {
                lines["2"] = false;
                lines["3"] = true;

                char = 0;
            }
            setTimeout(typewriter, speed["normal"]);
        }
    }

    if (lines["3"]) {
        setTimeout(
            () => {
                document.getElementById("console-line-3").innerHTML = "[Rust, Java, Node.js, Dart, Python, HTML, CSS]";
                document.getElementById("console-line-4").innerHTML = "<span id=\"console-easteregg\" style=\"color: black; background-color: #efefef;\">/Users/astolfodev/secret_stash/languages.txt (END)</span>"
            },
            175
        )
    }
}