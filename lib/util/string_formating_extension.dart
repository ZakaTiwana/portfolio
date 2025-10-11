extension StringFormatingExtension on String {
  String get whiteSpaceRemoved => replaceAll(RegExp(r'\s+'), '');
}
