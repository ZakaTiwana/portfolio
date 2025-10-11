import 'dart:math';
import 'package:flutter/material.dart';
import '../../constants/theme.dart';

class HomeBackground extends StatefulWidget {
  final Widget child;

  const HomeBackground({super.key, required this.child});

  @override
  State<HomeBackground> createState() => _HomeBackgroundState();
}

class _HomeBackgroundState extends State<HomeBackground>
    with TickerProviderStateMixin {
  late AnimationController _animationController;
  late List<Particle> _particles;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      duration: const Duration(seconds: 20),
      vsync: this,
    )..repeat();

    _particles = List.generate(8, (index) => Particle());
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(gradient: backgroundGradient),
      child: Stack(
        children: [
          AnimatedBuilder(
            animation: _animationController,
            builder: (context, child) {
              return CustomPaint(
                painter: ParticlePainter(
                  _particles,
                  _animationController.value,
                ),
                size: Size.infinite,
              );
            },
          ),

          widget.child,
        ],
      ),
    );
  }
}

class Particle {
  late double x;
  late double y;
  late double size;
  late double speed;
  late double opacity;
  late double direction;

  Particle() {
    final random = Random();
    x =
        random.nextDouble() * 0.4 +
        0.6; // Keep particles in right 40% of screen
    y = random.nextDouble() * 0.4; // Keep particles in top 40% of screen
    size = random.nextDouble() * 2 + 1;
    speed = random.nextDouble() * 0.5 + 0.1;
    opacity = random.nextDouble() * 0.6 + 0.2;
    direction = random.nextDouble() * 2 * pi;
  }

  void update() {
    x += cos(direction) * speed * 0.001;
    y += sin(direction) * speed * 0.001;

    // Keep particles in right 40% of screen
    if (x < 0.6) x = 1.0;
    if (x > 1.0) x = 0.6;

    // Keep particles in top 40% of screen
    if (y < 0) y = 0.4;
    if (y > 0.4) y = 0;
  }
}

class ParticlePainter extends CustomPainter {
  final List<Particle> particles;
  final double animationValue;

  ParticlePainter(this.particles, this.animationValue);

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = neonGreen.withValues(alpha: 0.3)
      ..style = PaintingStyle.fill;

    for (final particle in particles) {
      particle.update();

      final x = particle.x * size.width;
      final y = particle.y * size.height;

      // Create pulsing effect
      final pulse = (sin(animationValue * 2 * pi + particle.x * 10) + 1) / 2;
      final currentOpacity = particle.opacity * (0.5 + pulse * 0.5);

      paint.color = neonGreen.withValues(alpha: currentOpacity);

      // Draw particle with glow effect
      canvas.drawCircle(Offset(x, y), particle.size * (1 + pulse * 0.5), paint);

      // Add subtle glow
      paint.color = neonGreen.withValues(alpha: currentOpacity * 0.3);
      canvas.drawCircle(Offset(x, y), particle.size * 2, paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => true;
}
