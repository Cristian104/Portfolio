# Tmux Cheatsheet

Tmux is a terminal multiplexer that allows you to run multiple terminal sessions within a single terminal window. With Tmux, you can create multiple panes, windows, and sessions, each with their own shell and running programs.
Basic Commands

## Commands
Here are some basic Tmux commands to get you started:

    Start a new Tmux session:

    arduino

tmux new-session -s <session_name>

[Testing]('https://github.com/ixru/nvim-markdown') This command starts a new Tmux session with a specified name.

Attach to a Tmux session:

arduino

tmux attach-session -t <session_name>

This command attaches to a running Tmux session with a specified name.

Detach from a Tmux session:

css

alt + a, d

This key binding detaches your terminal from the current Tmux session and returns you to your shell prompt.

List Tmux sessions:

bash

tmux ls

This command lists all active Tmux sessions along with their session IDs and the number of windows and panes in each session.

Create a new Tmux window:

css

alt + a, c

This key binding creates a new Tmux window within the current session.

Switch to the next Tmux window:

css

alt + a, n

This key binding switches to the next Tmux window within the current session.

Switch to the previous Tmux window:

css

alt + a, p

This key binding switches to the previous Tmux window within the current session.

Split the current Tmux pane vertically:

css

alt + a, |

This key binding splits the current Tmux pane vertically, creating a new pane to the right of the current pane.

Split the current Tmux pane horizontally:

css

alt + a, %

This key binding splits the current Tmux pane horizontally, creating a new pane below the current pane.

Resize the current Tmux pane:

css

alt + a, <direction arrow>

This key binding resizes the current Tmux pane in the specified direction. Use the left arrow key to decrease the pane width, the right arrow key to increase the pane width, the up arrow key to decrease the pane height, and the down arrow key to increase the pane height.

Close the current Tmux pane:

css

    alt + a, x

    This key binding closes the current Tmux pane and removes it from the current window.

Conclusion

Tmux is a powerful tool that can help you streamline your workflow and manage your terminal sessions more efficiently. With these basic commands, you should be able to get started with Tmux and explore its many features and capabilities.
