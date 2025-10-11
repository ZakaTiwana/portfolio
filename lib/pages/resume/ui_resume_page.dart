import 'package:flutter/material.dart';
import 'package:pdfrx/pdfrx.dart';
import 'package:universal_html/html.dart' as html;
import 'package:flutter/services.dart' show rootBundle;

import '../../constants/theme.dart';
import '../../constants/text.dart';
import '../../gen/assets.gen.dart';
import '../../router/app_route.dart';

class ResumePage extends StatefulWidget {
  const ResumePage({super.key});

  @override
  State<ResumePage> createState() => _ResumePageState();
}

class _ResumePageState extends State<ResumePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: darkBackground,
      appBar: AppBar(
        backgroundColor: darkBackground,
        elevation: 0,
        leading: IconButton(
          onPressed: () => AppRoute.home.go(context),
          icon: const Icon(Icons.arrow_back, color: neonGreen),
        ),
        centerTitle: false,
        title: Text(
          HomePageText.backToHome,
          style: Theme.of(context).textTheme.headlineSmall?.copyWith(
            color: neonGreen,
            fontWeight: FontWeight.bold,
          ),
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 16),
            child: ElevatedButton.icon(
              onPressed: _downloadResume,
              icon: const Icon(Icons.download, color: darkBackground),
              label: Text(
                HomePageText.downloadResume,
                style: const TextStyle(color: darkBackground),
              ),
            ),
          ),
        ],
      ),
      body: Container(
        decoration: const BoxDecoration(gradient: backgroundGradient),
        child: Center(
          child: PdfViewer.asset(
            Assets.muhammadZakaullahResume,
            params: PdfViewerParams(
              scrollPhysics: BouncingScrollPhysics(),
              backgroundColor: darkBackground,
              scrollPhysicsScale: BouncingScrollPhysics(),
              errorBannerBuilder: (context, error, retry, dismiss) {
                return Container(
                  padding: const EdgeInsets.all(16),
                  color: neonGreen.withOpacity(0.1),
                  child: Row(
                    children: [
                      Icon(Icons.error, color: neonGreen),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(
                          'Error loading PDF: $error',
                          style: const TextStyle(color: lightGray),
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),
        ),
      ),
    );
  }

  void _downloadResume() async {
    try {
      final pdfBytes = await rootBundle.load(Assets.muhammadZakaullahResume);

      if (pdfBytes.lengthInBytes > 0) {
        final blob = html.Blob([pdfBytes.buffer.asUint8List()]);
        final url = html.Url.createObjectUrlFromBlob(blob);
        html.AnchorElement(href: url)
          ..setAttribute('download', 'Muhammad_Zakaullah_Resume.pdf')
          ..click();
        html.Url.revokeObjectUrl(url);
      }
    } catch (e) {
      // Handle error
    }
  }
}
