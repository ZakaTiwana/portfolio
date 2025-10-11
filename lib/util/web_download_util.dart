import 'dart:js_interop';
import 'package:flutter/services.dart';
import 'package:web/web.dart' as web;

/// Utility class for downloading assets using web APIs
class WebDownloadUtil {
  /// Download an asset file using web APIs
  static Future<void> downloadAsset({
    required String assetPath,
    required String fileName,
    String? mimeType,
  }) async {
    try {
      // Load asset bytes
      final assetBytes = await rootBundle.load(assetPath);

      if (assetBytes.lengthInBytes == 0) {
        throw Exception('Asset file is empty: $assetPath');
      }

      // Convert to Uint8List
      final bytes = assetBytes.buffer.asUint8List();

      // Download the bytes
      await downloadBytes(bytes: bytes, fileName: fileName, mimeType: mimeType);
    } catch (e) {
      throw Exception('Failed to download asset: $e');
    }
  }

  /// Download raw bytes using web APIs
  static Future<void> downloadBytes({
    required Uint8List bytes,
    required String fileName,
    String? mimeType,
  }) async {
    try {
      if (bytes.isEmpty) {
        throw Exception('Bytes array is empty');
      }

      // Create blob
      final blob = web.Blob(
        [bytes.toJS].toJS,
        web.BlobPropertyBag(
          type: mimeType ?? _getMimeTypeFromExtension(fileName),
        ),
      );

      final url = web.URL.createObjectURL(blob);

      // Create and trigger download
      final anchor = web.HTMLAnchorElement()
        ..href = url
        ..download = fileName
        ..style.display = 'none';

      web.document.body?.appendChild(anchor);
      anchor.click();
      web.document.body?.removeChild(anchor);

      // Clean up
      web.URL.revokeObjectURL(url);
    } catch (e) {
      throw Exception('Failed to download bytes: $e');
    }
  }

  /// Get MIME type from file extension
  static String _getMimeTypeFromExtension(String fileName) {
    final extension = fileName.split('.').last.toLowerCase();

    switch (extension) {
      case 'pdf':
        return 'application/pdf';
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg';
      case 'png':
        return 'image/png';
      case 'gif':
        return 'image/gif';
      case 'svg':
        return 'image/svg+xml';
      case 'txt':
        return 'text/plain';
      case 'json':
        return 'application/json';
      case 'zip':
        return 'application/zip';
      default:
        return 'application/octet-stream';
    }
  }
}
