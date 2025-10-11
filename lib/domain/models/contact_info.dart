class ContactInfo {
  final String email;
  final String mobile;
  final String github;
  final String linkedin;

  const ContactInfo({
    required this.email,
    required this.mobile,
    required this.github,
    required this.linkedin,
  });

  factory ContactInfo.fromJson(Map<String, dynamic> json) {
    return ContactInfo(
      email: json['email'] as String,
      mobile: json['mobile'] as String,
      github: json['github'] as String,
      linkedin: json['linkedin'] as String,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'email': email,
      'mobile': mobile,
      'github': github,
      'linkedin': linkedin,
    };
  }
}
