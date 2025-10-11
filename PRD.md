# Portfolio Flutter Web - Product Requirements Document

## 1. Product Overview

### 1.1 Product Name
Muhammad Zakaullah Portfolio

### 1.2 Product Vision
A modern, responsive Flutter web portfolio showcasing professional work and projects with a sleek dark theme and neon green accents.

### 1.3 Target Audience
- Potential employers and clients
- Professional network (LinkedIn, GitHub connections)
- Tech community and peers

## 2. Product Goals

### 2.1 Primary Goals
- Showcase professional profile and contact information
- Display portfolio of completed projects with visual previews
- Demonstrate technical skills and expertise
- Provide easy access to professional contact methods

### 2.2 Success Metrics
- User engagement time on page
- Contact method interactions (email clicks, GitHub visits)
- Project showcase visibility
- Mobile responsiveness across devices

## 3. User Stories

### 3.1 As a Potential Employer
- I want to quickly understand the developer's skills and experience
- I want to see examples of their work with visual previews
- I want to easily contact them for opportunities
- I want to view their GitHub profile and other professional links

### 3.2 As a Client
- I want to see the quality of work through project showcases
- I want to understand the technologies they work with
- I want to contact them for project discussions

### 3.3 As a Peer Developer
- I want to see their technical projects and code quality
- I want to connect with them professionally
- I want to understand their development approach

## 4. Functional Requirements

### 4.1 Core Features

#### 4.1.1 Introduction Section
- **Profile Picture**: Circular image with neon green border and glow effect
- **Name & Title**: Prominent display of full name and professional title
- **Bio**: Brief professional description (2-3 lines)
- **Contact Information**: 
  - Email address with click-to-email functionality
  - Mobile number with click-to-call functionality
  - GitHub profile link
  - LinkedIn profile link

#### 4.1.2 Projects Section
- **Section Header**: "My Projects" with subtitle
- **Project Cards**: Individual cards for each project featuring:
  - Project name with neon green highlighting
  - 1-2 line project summary
  - Technology stack tags
  - Mobile frame preview of project screenshots
  - GitHub link (when available)
- **Layout**: Vertical list with alternating image positions (left/right)
- **Responsive Design**: Mobile-first approach with desktop enhancements

### 4.2 Technical Requirements

#### 4.2.1 Architecture
- **State Management**: Riverpod for reactive state management
- **Routing**: GoRouter with AppRoute enum for navigation
- **Asset Management**: flutter_gen for type-safe asset access
- **Widget Architecture**: Reusable widget components following Flutter best practices

#### 4.2.2 Design System
- **Color Palette**:
  - Primary: Neon Green (#00FF41)
  - Background: Dark with green tint gradient
  - Text: White for headers, light gray for body text
  - Accents: Gradient borders on important elements
- **Typography**: Material Design 3 text styles
- **Spacing**: Consistent 24px sections, 16px cards
- **Borders**: Rounded corners (16px) with gradient highlights

#### 4.2.3 Responsive Design
- **Mobile**: Single column layout, stacked content
- **Tablet**: Optimized spacing and sizing
- **Desktop**: Full alternating layout with maximum 1200px content width

## 5. Non-Functional Requirements

### 5.1 Performance
- Fast initial load time (< 3 seconds)
- Smooth scrolling experience
- Optimized image loading
- Efficient widget rebuilding

### 5.2 Accessibility
- Semantic HTML structure
- Proper contrast ratios
- Keyboard navigation support
- Screen reader compatibility

### 5.3 Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### 5.4 Mobile Responsiveness
- iOS Safari
- Android Chrome
- Responsive breakpoints: 768px, 1024px, 1200px

## 6. Project Data Structure

### 6.1 Project Model
```dart
class Project {
  final String name;
  final String summary;
  final List<String> imagePaths;
  final List<String> technologies;
  final String? githubUrl;
  final String? liveUrl;
}
```

### 6.2 Contact Info Model
```dart
class ContactInfo {
  final String email;
  final String mobile;
  final String github;
  final String linkedin;
}
```

## 7. Content Requirements

### 7.1 Personal Information
- **Name**: Muhammad Zakaullah Tiwana
- **Title**: Flutter Developer
- **Bio**: Professional description highlighting expertise
- **Contact**: Email, mobile, GitHub, LinkedIn

### 7.2 Project Portfolio
1. **DhaoAI - Mobile App**: AI-powered mobile app with Flutter
2. **LAAF**: Foot health monitoring app with IoT connectivity
3. **MyVox**: Multi-language reporting app for paralegals
4. **Roomph**: Hotel reservation app (Native Swift)
5. **TapPay**: NFC payment proof-of-concept
6. **NewImage**: Fitness equipment companion app

## 8. Technical Implementation

### 8.1 File Structure
```
lib/
├── common/
│   └── widgets/
│       └── home_background.dart
├── domain/
│   └── models/
│       ├── project.dart
│       └── contact_info.dart
├── pages/
│   └── home/
│       ├── providers/
│       │   └── projects_provider.dart
│       ├── widgets/
│       │   ├── intro_section.dart
│       │   ├── projects_section.dart
│       │   ├── project_card.dart
│       │   └── phone_frame.dart
│       └── ui_home_page.dart
└── constants/
    ├── theme.dart
    └── text.dart
```

### 8.2 Key Components
- **HomeBackground**: Dark gradient background widget
- **IntroSection**: Profile and contact information
- **ProjectsSection**: Project showcase container
- **ProjectCard**: Individual project display with alternating layout
- **PhoneFrame**: Generic phone frame for project screenshots

## 9. Future Enhancements

### 9.1 Phase 2 Features
- Project detail modals with full image galleries
- Blog section for technical articles
- Skills section with progress indicators
- Downloadable resume integration
- Contact form with email integration

### 9.2 Phase 3 Features
- Dark/light theme toggle
- Multi-language support
- Analytics integration
- SEO optimization
- Performance monitoring

## 10. Success Criteria

### 10.1 Launch Criteria
- All 6 projects displayed with proper images
- Contact information functional
- Responsive design working across devices
- No console errors or linting issues
- Fast loading performance

### 10.2 Post-Launch Metrics
- Page load time < 3 seconds
- Mobile responsiveness score > 90%
- Contact interaction rate
- Project engagement metrics

---

**Document Version**: 1.0  
**Last Updated**: December 2024  
**Author**: Muhammad Zakaullah Tiwana
