<script setup lang="ts">
// Types
type CardType = 'left' | 'right' | 'center' | 'top' | 'bottom'
type CardSize = 'small' | 'medium' | 'large'
type CardColor = 'white' | 'gradient' | 'radial'

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

defineProps({
  type: { type: String as () => CardType, default: 'left' },
  size: { type: String as () => CardSize, default: 'medium' },
  color: { type: String as () => CardColor, default: 'white' },
  clickable: { type: Boolean, default: false }
})
</script>

<template>
  <div 
    :class="[
      'feature-card',
      `feature-card--${size}`,
      { 'feature-card--clickable': clickable }
    ]"
    @click="$emit('click', $event)"
  >
    <div :class="[`feature-card--${type}`, `feature-card--${color}`, `feature-card--${size}`]">
    </div>
    <div class="feature-card__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feature-card {
    position: relative;
    overflow:hidden;
    width: fit-content;
    border-radius: 24px;

  // TYPES

  // left
  &--left {
    -webkit-transform: skew(20deg) translateX(-100px);
       -moz-transform: skew(20deg) translateX(-100px);
         -o-transform: skew(20deg) translateX(-100px);
         transform: skew(20deg) translateX(-100px);
         border-radius: 24px;
    
    .feature-card__content{
        -webkit-transform: skew(-20deg) translateX(-100px);
       -moz-transform: skew(-20deg) translateX(-100px);
         -o-transform: skew(-20deg) translateX(-100px);
         transform: skew(-20deg) translateX(-100px);
         z-index: 100;
         margin-left: 200px;
    }
  }

  // right
  &--right {
    -webkit-transform: skew(-20deg) translateX(100px);
       -moz-transform: skew(-20deg) translateX(100px);
         -o-transform: skew(-20deg) translateX(100px);
         transform: skew(-20deg) translateX(100px);
         border-radius: 24px;
    
    .feature-card__content{
        -webkit-transform: skew(20deg) translateX(100px);
       -moz-transform: skew(20deg) translateX(100px);
         -o-transform: skew(20deg) translateX(100px);
         transform: skew(20deg) translateX(100px);
         z-index: 100;
         margin-left: 200px;
    }
  }

  // center
  &--center {
    background: var(--bg-blue);
    border-radius: 24px;
    clip-path: path('\
        M478.735 308.421C475.224 317.791 466.267 324 456.26\
        324H24.0189C7.23719 324 -4.36306 307.217 1.56756\
        291.518L105.833 15.5184C109.361 6.17964 118.302\
        -6.10352e-05 128.285 -6.10352e-05H559.675C576.429\
        -6.10352e-05 588.028 16.7318 582.149 32.4208L478.735 308.421Z\
    ');
  }

  // top
  &--top {
    background: var(--bg-blue);
    clip-path: path('\
        M0 24C0 10.7452 10.7452 0 24 0H668C681.255 0 692\
        10.7452 692 24V152.336C692 164.792 682.471 175.178 670.061\
        176.248L26.0609 231.754C12.0448 232.962 0 221.911 0 207.842V24Z\
    ');
  }

  // bottom
  &--bottom {
    border-radius: 24px;
    clip-path: path('\
        M668 292.594H24C11.0213 292.594 0.5 282.072 0.5\
        269.094V73.375C0.5 61.0931 9.95809 50.8822 22.2041 49.9434L666.204\
        0.573242C679.85 -0.472708 691.5 10.3175 691.5\
        24.0039V269.094L691.492 269.7C691.171 282.399\
        680.776 292.594 668 292.594Z\
    ');
    
    &::before {
      border: 1px solid rgba(28, 29, 33, 0.15);
      border-radius: 24px;
    }
  }

  // COLORS

  // gradient
  &--gradient {
    background: var(--bg-blue-linear);
  }

  // radial
  &--radial {
    background: var(--bg-blue-radial);
    border-radius: 24px;
  }

  // SIZES
  
  &--small {
    width: 400px;
    height: 200px;
  }

  &--medium {
    width: 584px;
    height: 324px;
  }

  &--large {
    width: 871px;
    height: 324px;
  }

  // CONTENT
  
  &__content {
    z-index: 2;
    position: absolute;
    left: 0;
    bottom: 0;
    width: calc(100% - 100px);
    padding-left: 100px;
    padding-bottom: 30px;
  }
  
  &--clickable {
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 100% !important;
    height: auto !important;
    aspect-ratio: 16 / 9;
    clip-path: none !important;
    border-radius: 16px !important;
    
    &::before {
      border-radius: 16px !important;
    }
    
    &__content {
      padding: 24px;
    }
  }
}
</style>