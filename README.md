# Calculator App

A modern calculator web application built with HTML, CSS, and JavaScript, designed to match the provided Figma design specifications.

![Calculator App](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🌟 Features

### Core Functionality

- ✅ Basic arithmetic operations: addition (+), subtraction (-), multiplication (×), division (÷)
- ✅ Decimal number support
- ✅ Clear (C) function to reset calculator
- ✅ Backspace (←) function to delete last character
- ✅ Real-time expression and result display
- ✅ Error handling for invalid calculations

### Design Features

- 🎨 **Exact Figma Design Match**: Pixel-perfect implementation of the provided design
- 🌙 **Dark Theme**: Professional dark calculator body (#2d2d2d)
- 💙 **Blue Display**: Gradient blue display area for clear visibility
- 🟠 **Orange Operators**: High-contrast orange buttons for operators
- ⚫ **Round Buttons**: Circular button design for modern aesthetic
- 📏 **Compact Layout**: 4x5 button grid optimized for usability

### Bonus Features

- ⌨️ **Full Keyboard Support**:

  - Numbers: `0-9`
  - Decimal: `.`
  - Operators: `+`, `-`, `*`, `/`
  - Equals: `Enter` or `=`
  - Clear: `Escape` or `Delete`
  - Backspace: `Backspace`

## 📁 Project Structure

```
calculator-app/
│
├── index.html          # HTML structure
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # Documentation
```

## Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/calculator-app.git
   cd calculator-app
   ```

2. **Open in browser**

   - Simply open `index.html` in your web browser

3. **Access the app**
   - Direct file: Open `index.html` in your browser
   - Local server: Navigate to `http://localhost:8000`

## 💻 Usage

### Mouse/Touch Input

- Click number buttons (1-9, 0) to build your expression
- Click operator buttons (+, -, ×, ÷)
- Click `=` to calculate the result
- Click `C` to clear everything
- Click `←` (backspace icon) to delete the last character

### Keyboard Input

- **Numbers**: Type `0-9`
- **Decimal**: Type `.`
- **Addition**: Type `+`
- **Subtraction**: Type `-`
- **Multiplication**: Type `*`
- **Division**: Type `/`
- **Calculate**: Press `Enter` or `=`
- **Clear**: Press `Escape` or `Delete`
- **Backspace**: Press `Backspace`

## 🎨 Design Specifications

### Color Palette

- **Calculator Body**: `#2d2d2d` (Dark Gray)
- **Display Background**: `#5f72bd` to `#5865b0` (Blue Gradient)
- **Number Buttons**: `#4a4a4a` (Gray)
- **Operator Buttons**: `#ff9500` (Orange)
- **Display Text**: `#ffffff` (White)
- **Expression Text**: `rgba(255, 255, 255, 0.7)` (Semi-transparent White)

### Button Layout

```
1  2  3  +
4  5  6  -
7  8  9  ×
.  0  ←  ÷
[  C  ] [  =  ]
```

### Measurements

- Calculator width: 340px (max)
- Button size: 64px diameter (circular)
- Button gap: 12px
- Border radius: 24px (calculator), 50% (buttons)
- Display padding: 24px vertical, 20px horizontal

## 🔧 Technical Implementation

### HTML Structure

- Semantic HTML5 markup
- Organized button grid layout
- Data attributes for easy JavaScript targeting
- SVG icon for backspace button

### CSS Features

- CSS Grid for button layout
- Flexbox for display alignment
- CSS transitions for smooth animations
- Mobile-first responsive design
- Circular button shapes using `border-radius: 50%`
- Linear gradient for display area

### JavaScript Features

- Event-driven architecture
- Real-time expression building
- Safe expression evaluation with error handling
- Floating-point precision handling
- Input validation (prevents multiple decimals)
- Keyboard event handling

## 👨‍💻 Developer

Built as part of a web development assessment demonstrating proficiency in:

- HTML5 semantic markup
- CSS3 modern layouts and animations
- Vanilla JavaScript DOM manipulation
- Figma design implementation
