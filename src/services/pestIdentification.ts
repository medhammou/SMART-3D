import * as tf from '@tensorflow/tfjs';

export interface PestIdentificationResult {
  pestType: string;
  confidence: number;
  riskLevel: 'low' | 'medium' | 'high';
}

export class PestIdentificationService {
  private model: tf.LayersModel | null = null;
  private isLoading = false;

  private async loadModel() {
    if (this.model || this.isLoading) return;
    
    this.isLoading = true;
    try {
      // In a real implementation, this would load a trained model from a URL
      // For demo purposes, we'll create a simple model
      this.model = tf.sequential({
        layers: [
          tf.layers.conv2d({
            inputShape: [224, 224, 3],
            kernelSize: 3,
            filters: 16,
            activation: 'relu'
          }),
          tf.layers.globalAveragePooling2d({}),
          tf.layers.dense({ units: 10, activation: 'softmax' })
        ]
      });
    } catch (error) {
      console.error('Error loading model:', error);
      throw error;
    } finally {
      this.isLoading = false;
    }
  }

  private async preprocessImage(imageData: ImageData): Promise<tf.Tensor> {
    return tf.tidy(() => {
      const tensor = tf.browser.fromPixels(imageData)
        .resizeBilinear([224, 224])
        .toFloat()
        .expandDims();
      return tensor.div(255.0);
    });
  }

  private getRiskLevel(confidence: number): 'low' | 'medium' | 'high' {
    if (confidence > 0.8) return 'high';
    if (confidence > 0.5) return 'medium';
    return 'low';
  }

  async identifyPest(imageFile: File): Promise<PestIdentificationResult> {
    await this.loadModel();
    if (!this.model) {
      throw new Error('Model not loaded');
    }

    const img = new Image();
    img.src = URL.createObjectURL(imageFile);
    await new Promise((resolve) => img.onload = resolve);

    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const tensor = await this.preprocessImage(imageData);

    try {
      // For demo purposes, return mock results
      // In production, this would use the actual model prediction
      return {
        pestType: 'Rat brun (Rattus norvegicus)',
        confidence: 0.89,
        riskLevel: 'high'
      };
    } finally {
      tensor.dispose();
    }
  }
}