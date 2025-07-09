<template>
  <div class="home">
    <!-- 动效背景 -->
    <div class="animated-background">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
        <div class="shape shape-6"></div>
      </div>
      <div class="gradient-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
    </div>

    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">{{ $t('home.title') }}</h1>
        <p class="hero-subtitle">{{ $t('home.subtitle') }}</p>
        <p class="hero-description">{{ $t('home.introduction') }}</p>
        
        <div class="hero-actions">
          <router-link to="/works" class="btn btn-primary">
            {{ $t('home.viewWorks') }}
          </router-link>
          <a href="#" class="btn btn-outline" @click="downloadResume">
            {{ $t('home.downloadResume') }}
          </a>
        </div>
      </div>
      
      <div class="hero-avatar">
        <div class="avatar-container">
          <img src="@/assets/logo.png" alt="Avatar" class="avatar-image" />
          <div class="avatar-ring"></div>
        </div>
      </div>
    </section>

    <!-- 快速导航区域 -->
    <section class="quick-nav">
      <div class="nav-grid">
        <router-link to="/works" class="nav-card">
          <div class="nav-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3Z" stroke="currentColor" stroke-width="2"/>
              <path d="M8 7H16M8 11H16M8 15H12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
                     <h3 class="nav-title">{{ $t('works.title') }}</h3>
           <div class="nav-arrow">→</div>
        </router-link>

        <router-link to="/resume" class="nav-card">
          <div class="nav-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
                     <h3 class="nav-title">{{ $t('resume.title') }}</h3>
           <div class="nav-arrow">→</div>
        </router-link>

        <router-link to="/honors" class="nav-card">
          <div class="nav-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9C6 10.6569 7.34315 12 9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9Z" stroke="currentColor" stroke-width="2"/>
              <path d="M9 12L7 20L9 18L11 20L9 12Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <path d="M18 9C18 10.6569 16.6569 12 15 12C13.3431 12 12 10.6569 12 9C12 7.34315 13.3431 6 15 6C16.6569 6 18 7.34315 18 9Z" stroke="currentColor" stroke-width="2"/>
              <path d="M15 12L13 20L15 18L17 20L15 12Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </div>
                     <h3 class="nav-title">{{ $t('honors.title') }}</h3>
           <div class="nav-arrow">→</div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    downloadResume() {
      // 这里可以添加下载简历的逻辑
      alert('简历下载功能待实现')
    }
  }
}
</script>

<style scoped>
.home {
  padding: 0;
  position: relative;
  overflow: hidden;
}

/* 动效背景 */
.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

/* 浮动几何形状 */
.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  opacity: 0.1;
  animation: float 15s infinite ease-in-out;
}

.shape-1 {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  border-radius: 20px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: 50%;
  top: 20%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  transform: rotate(45deg);
  top: 60%;
  left: 5%;
  animation-delay: 4s;
}

.shape-4 {
  width: 70px;
  height: 70px;
  background: var(--secondary-color);
  border-radius: 30px;
  bottom: 20%;
  right: 10%;
  animation-delay: 6s;
}

.shape-5 {
  width: 90px;
  height: 90px;
  background: linear-gradient(90deg, var(--primary-color), transparent);
  border-radius: 50%;
  top: 70%;
  right: 30%;
  animation-delay: 8s;
}

.shape-6 {
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  top: 30%;
  left: 30%;
  animation-delay: 10s;
}

/* 渐变光球 */
.gradient-orbs {
  position: absolute;
  width: 100%;
  height: 100%;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(1px);
  opacity: 0.3;
  animation: orbFloat 20s infinite ease-in-out;
}

.orb-1 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
  top: 10%;
  right: 20%;
  animation-delay: 0s;
}

.orb-2 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, var(--secondary-color) 0%, transparent 70%);
  bottom: 30%;
  left: 20%;
  animation-delay: 7s;
}

.orb-3 {
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
  top: 50%;
  right: 40%;
  animation-delay: 14s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
  75% {
    transform: translateY(-30px) rotate(270deg);
  }
}

@keyframes orbFloat {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.hero {
  display: grid;
  grid-template-columns: 1fr 250px;
  gap: 1.5rem;
  align-items: center;
  min-height: 42vh;
  padding: 2rem 2rem 1rem 2rem;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  max-width: 600px;
  animation: slideInLeft 1s ease-out;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  animation: titleGlow 2s ease-in-out infinite alternate;
}

@keyframes titleGlow {
  from {
    filter: drop-shadow(0 0 10px rgba(74, 144, 226, 0.3));
  }
  to {
    filter: drop-shadow(0 0 20px rgba(74, 144, 226, 0.6));
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease-out 0.3s both;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  color: var(--text-color);
  animation: fadeInUp 1s ease-out 0.6s both;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.9s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-avatar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation: slideInRight 1s ease-out 0.5s both;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 头像容器和样式 */
.avatar-container {
  position: relative;
  width: 250px;
  height: 250px;
  animation: avatarPulse 3s ease-in-out infinite;
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, var(--primary-color), var(--secondary-color)) border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.avatar-image:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(74, 144, 226, 0.3);
}

.avatar-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color), var(--primary-color)) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: ringRotate 4s linear infinite;
  opacity: 0.6;
}

@keyframes avatarPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

@keyframes ringRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 快速导航样式 */
.quick-nav {
  padding: 4rem 0;
  margin-top: 2rem;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.nav-card {
  background: var(--light-bg);
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  animation: fadeInUp 1s ease-out 1.2s both;
}

.nav-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.nav-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.nav-card:hover::before {
  left: 100%;
}

.nav-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  transition: all 0.3s ease;
}

.nav-card:hover .nav-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 20px rgba(74, 144, 226, 0.3);
}

.nav-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
  transition: color 0.3s ease;
}

.nav-card:hover .nav-title {
  color: var(--secondary-color);
}

.nav-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.nav-arrow {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.5rem;
  color: var(--primary-color);
  transition: all 0.3s ease;
  opacity: 0.7;
}

.nav-card:hover .nav-arrow {
  transform: translateX(5px);
  opacity: 1;
  color: var(--secondary-color);
}

/* 卡片延迟动画 */
.nav-card:nth-child(1) {
  animation-delay: 1.2s;
}

.nav-card:nth-child(2) {
  animation-delay: 1.4s;
}

.nav-card:nth-child(3) {
  animation-delay: 1.6s;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2.25rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-avatar {
    justify-self: center;
  }

  .avatar-container {
    width: 150px;
    height: 150px;
  }

  /* 移动端减少动画复杂度 */
  .shape {
    display: none;
  }
  
  .orb {
    opacity: 0.2;
  }

  /* 快速导航移动端样式 */
  .quick-nav {
    padding: 2rem 0;
    margin-top: 1rem;
  }

  .nav-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .nav-card {
    padding: 1.5rem;
  }

  .nav-icon {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    margin-bottom: 1rem;
  }

  .nav-title {
    font-size: 1.25rem;
  }

  .nav-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .nav-arrow {
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.25rem;
  }
}

/* 减少动画的选项 */
@media (prefers-reduced-motion: reduce) {
  .shape,
  .orb {
    animation: none;
  }
  
  .hero-title {
    animation: none;
  }
  
  .avatar-container {
    animation: none;
  }
  
  .avatar-ring {
    animation: none;
  }
}
</style> 