// Web Audio API synthesizer for pure, latency-free temple bells and sacred ambient soundscape
// No external assets or broken CDN links needed.

class SoundEngine {
  private ctx: AudioContext | null = null;
  private ambientGain: GainNode | null = null;
  private ambientOscillators: OscillatorNode[] = [];
  private isAmbientPlaying = false;

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Pure brass temple bell chime with rich harmonic overtones
  public playTempleBell(pitch: number = 528) {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const masterGain = this.ctx.createGain();
      masterGain.connect(this.ctx.destination);
      masterGain.gain.setValueAtTime(0.4, now);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      // Harmonics for authentic Indian brass ghanti / bell timbre
      const frequencies = [pitch, pitch * 2.01, pitch * 3.01, pitch * 4.15, pitch * 5.43];
      const gains = [0.6, 0.35, 0.25, 0.15, 0.08];

      frequencies.forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();

        osc.type = i === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, now);

        oscGain.gain.setValueAtTime(gains[i], now);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, now + (3.0 - i * 0.4));

        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 3.2);
      });
    } catch {
      // AudioContext could be blocked by browser policy prior to user interaction
    }
  }

  // Soft shankh / conch or singing bowl tone for completing 108 japa
  public playMalaCompleteSound() {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const masterGain = this.ctx.createGain();
      masterGain.connect(this.ctx.destination);
      masterGain.gain.setValueAtTime(0.5, now);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 6.0);

      // Deep meditative gong / singing bowl (136.1 Hz - OM frequency)
      const freqs = [136.1, 272.2, 408.3, 544.4];
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        g.gain.setValueAtTime(0.4 / (idx + 1), now);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 6.0);

        osc.connect(g);
        g.connect(masterGain);
        osc.start(now);
        osc.stop(now + 6.0);
      });
    } catch {
      // Ignored
    }
  }

  // Subtle ambient forest drone + wind chime layer
  public toggleSacredAmbience(on?: boolean): boolean {
    this.initCtx();
    if (!this.ctx) return false;

    if (on === undefined) {
      this.isAmbientPlaying = !this.isAmbientPlaying;
    } else {
      this.isAmbientPlaying = on;
    }

    if (this.isAmbientPlaying) {
      this.startAmbient();
    } else {
      this.stopAmbient();
    }

    return this.isAmbientPlaying;
  }

  public getIsAmbientPlaying(): boolean {
    return this.isAmbientPlaying;
  }

  private startAmbient() {
    if (!this.ctx) return;
    this.stopAmbient();

    const now = this.ctx.currentTime;
    this.ambientGain = this.ctx.createGain();
    this.ambientGain.connect(this.ctx.destination);
    this.ambientGain.gain.setValueAtTime(0.0001, now);
    this.ambientGain.gain.exponentialRampToValueAtTime(0.08, now + 2);

    // Warm sacred drone (Tanpura/Bhairav atmospheric fundamental: C# / 138Hz & G# / 207Hz)
    const droneFreqs = [138.5, 207.65, 277.18];
    droneFreqs.forEach((freq) => {
      if (!this.ctx || !this.ambientGain) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      // Low frequency modulation for breathing wave effect
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.12, now); // 8-second breathing cycle
      lfoGain.gain.setValueAtTime(0.02, now);
      lfo.connect(lfoGain.gain);
      lfo.start(now);
      this.ambientOscillators.push(lfo);

      oscGain.gain.setValueAtTime(0.03, now);
      osc.connect(oscGain);
      oscGain.connect(this.ambientGain);
      osc.start(now);
      this.ambientOscillators.push(osc);
    });
  }

  private stopAmbient() {
    if (this.ambientGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
    }
    setTimeout(() => {
      this.ambientOscillators.forEach((osc) => {
        try {
          osc.stop();
        } catch {}
      });
      this.ambientOscillators = [];
    }, 1500);
  }
}

export const sound = new SoundEngine();
