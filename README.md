# Muhammad Zakaullah Portfolio

A modern, responsive Flutter web portfolio showcasing my work as a Senior Mobile Developer specializing in Flutter, Swift (UIKit/SwiftUI), and Android Kotlin development.

## 👨‍💻 About Me

**Muhammad Zakaullah Tiwana**  
Senior Mobile Developer

- **Specialization**: Flutter, Swift (UIKit/SwiftUI), Android Kotlin
- **Experience**: 5+ years in mobile development
- **Location**: Pakistan
- **Email**: zakatiwana@gmail.com
- **GitHub**: [github.com/zakatiwana](https://github.com/zakatiwana)
- **LinkedIn**: [linkedin.com/in/zakatiwana](https://linkedin.com/in/zakatiwana)


## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com) <!-- Update with your actual deployment URL -->

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Dark theme with neon green accents and gradient backgrounds
- **Interactive Project Showcase**: Scrollable project images with navigation controls
- **Clean Architecture**: Well-structured codebase following Flutter best practices
- **Responsive**: Made responsive by using LayoutBuilder and breakpoints

## 🛠️ Tech Stack

- **Framework**: Flutter Web
- **State Management**: Riverpod
- **Routing**: GoRouter
- **Asset Management**: flutter_gen
- **Architecture**: Clean Architecture with domain/presentation layers
- **Styling**: Custom themes with Material Design 3

## 🏗️ Project Structure

```
lib/
├── common/
│   └── widgets/           # Reusable UI components
├── constants/
│   ├── breakpoints.dart   # Responsive breakpoints
│   ├── text.dart         # All text constants
│   └── theme.dart        # App theming and colors
├── domain/
│   └── models/           # Data models
├── gen/
│   └── assets.gen.dart   # Generated asset references
├── pages/
│   └── home/
│       ├── providers/    # Riverpod providers
│       └── widgets/      # Page-specific widgets
├── router/               # GoRouter configuration
└── util/                 # Utility functions and extensions
```

## 🚀 Getting Started

### Prerequisites

- FVM
- Flutter SDK (3.35.5 or higher)
- Dart SDK
- Web browser for testing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio_flutter_web.git
   cd portfolio_flutter_web
   ```

2. **Install dependencies**
   ```bash
   fvm sflutter pub get
   ```

3. **Generate assets**
   ```bash
   fvm dart run build_runner build
   ```

4. **Run the application**
   ```bash
   fvm flutter run -d web-server --web-port 8080
   ```

5. **Open in browser**
   Navigate to `http://localhost:8080`

## 🚀 Deployment

### Build for Production
```bash
flutter build web --release
```