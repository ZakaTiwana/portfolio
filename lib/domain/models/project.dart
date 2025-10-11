class Project {
  final String name;
  final String summary;
  final List<String> imagePaths;
  final List<String> technologies;
  final String? githubUrl;
  final String? liveUrl;

  const Project({
    required this.name,
    required this.summary,
    required this.imagePaths,
    required this.technologies,
    this.githubUrl,
    this.liveUrl,
  });

  factory Project.fromJson(Map<String, dynamic> json) {
    return Project(
      name: json['name'] as String,
      summary: json['summary'] as String,
      imagePaths: List<String>.from(json['imagePaths'] as List),
      technologies: List<String>.from(json['technologies'] as List),
      githubUrl: json['githubUrl'] as String?,
      liveUrl: json['liveUrl'] as String?,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'summary': summary,
      'imagePaths': imagePaths,
      'technologies': technologies,
      'githubUrl': githubUrl,
      'liveUrl': liveUrl,
    };
  }
}
