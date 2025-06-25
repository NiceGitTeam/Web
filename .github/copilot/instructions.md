# Copilot Instructions

## Code Style Guidelines

When generating code for this project, please follow these guidelines:

### Indentation

- **Always use tabs for indentation** rather than spaces
- Maintain consistent indentation levels within code blocks

### Naming Conventions

- Use camelCase for JavaScript variable and function names
- Use kebab-case for CSS class names and HTML IDs
- Use PascalCase for constructor functions and class names

### Language-Specific Guidelines

#### HTML

- Use tabs for indentation
- Use double quotes for attributes
- Close self-closing tags with a trailing slash (e.g., `<img src="image.jpg" alt="Description" />`)

#### CSS/SCSS

- Use tabs for indentation
- Include a space after colons in property declarations
- Place each selector on its own line in multi-selector rulesets
- Always include a semicolon after the last property

#### JavaScript

- Use tabs for indentation
- Use semicolons at the end of statements
- Use single quotes for strings unless the string contains single quotes
- Declare one variable per line

### Code Structure

- Keep functions small and focused on a single task
- Add appropriate comments for complex logic
- Group related code together

### Example with tabs

```html
<!-- markdownlint-disable MD010 -->
<!DOCTYPE html>
<html>
<head>
	<title>Example Page</title>
	<style>
		.container {
			display: flex;
			flex-direction: column;
		}
	</style>
</head>
<body>
	<div class="container">
	<h1>Hello World</h1>
</div>
	<script>
		function exampleFunction() {
		const items = [
			'item1',
			'item2',
			'item3'
		];

		for (const item of items) {
			console.log(item);
		}
	}
	</script>
</body>
</html>
```

## Project-Specific Conventions

- Follow Jekyll conventions for front matter and Liquid templates
- Match the existing style in adjacent files when modifying code
- Use meaningful commit messages that describe the purpose of changes
- This is a Jekyll website based on the CloudCannon hydra-jekyll-template

Remember to prioritize readability and maintainability in all generated code.
