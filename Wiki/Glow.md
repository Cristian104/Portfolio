# Glow Plugin for Neovim

The Glow plugin is a Neovim plugin that provides a preview of Markdown files inside Neovim. It uses the Glow command-line tool to generate the preview, which means that you need to have Glow installed on your system for the plugin to work.

## Installation

To install the Glow plugin, you can use a plugin manager such as `packer.nvim` or `vim-plug`. Here's an example of how to install the plugin using `packer.nvim`:

```lua
-- Install the Glow plugin
use { "npxbr/glow.nvim", run = ":GlowInstall" }
```

-- Customize the Glow plugin
vim.g.glow_binary_path = "/path/to/glow" -- The path to the Glow binary on your system
vim.g.glow_highlight_style = "github" -- The style of syntax highlighting to use in the preview
vim.g.glow_window_width = 80 -- The width of the preview window
vim.g.glow_window_border = "rounded" -- The style of the preview window border
vim.g.glow_virtual_text = "true" -- Whether to display virtual text in the buffer showing the current section of the preview
