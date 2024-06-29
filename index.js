process.stdin.resume();
process.stdin.setEncoding('utf8');


process.stdin.on('data', function(input) {
    const [f, s, g, u, d] = input.trim().split(' ').map(Number);

    const minButtonPresses = (f, s, g, u, d) => {
        if (s === g) {
            return 0;
        }

        const visited = new Array(f + 1).fill(false);
        const queue = [{ floor: s, presses: 0 }];
        visited[s] = true;

        while (queue.length > 0) {
            const { floor, presses } = queue.shift();

            const nextUp = floor + u;
            if (nextUp <= f && !visited[nextUp]) {
                if (nextUp === g) {
                    return presses + 1;
                }
                visited[nextUp] = true;
                queue.push({ floor: nextUp, presses: presses + 1 });
            }

            const nextDown = floor - d;
            if (nextDown >= 1 && !visited[nextDown]) {
                if (nextDown === g) {
                    return presses + 1;
                }
                visited[nextDown] = true;
                queue.push({ floor: nextDown, presses: presses + 1 });
            }
        }

        return "use the stairs";
    }

    const result = minButtonPresses(f, s, g, u, d);
    console.log(result);
    process.exit();
});