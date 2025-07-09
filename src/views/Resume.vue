<template>
  <div class="resume">
    <div class="page-header">
      <h1 class="page-title">{{ $t('resume.title') }}</h1>
      <div class="resume-actions">
        <button @click="downloadPDF" class="btn btn-primary">
          {{ $t('resume.downloadPDF') }}
        </button>
      </div>
    </div>

    <div class="resume-content">
      <!-- 教育经历 -->
      <section class="resume-section">
        <h2 class="section-title">
          <span class="section-icon">🎓</span>
          {{ $t('resume.education') }}
        </h2>
        <div class="timeline">
          <div 
            v-for="edu in education" 
            :key="edu.id"
            class="timeline-item"
          >
            <div class="timeline-date">{{ edu.year }}</div>
            <div class="timeline-content">
              <h3 class="timeline-title">{{ edu.degree }}</h3>
              <h4 class="timeline-subtitle">{{ edu.school }}</h4>
              <p class="timeline-description">{{ edu.description }}</p>
              <div class="timeline-details" v-if="edu.details">
                <span 
                  v-for="detail in edu.details" 
                  :key="detail"
                  class="detail-tag"
                >
                  {{ detail }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 工作经历 -->
      <section class="resume-section">
        <h2 class="section-title">
          <span class="section-icon">💼</span>
          {{ $t('resume.experience') }}
        </h2>
        <div class="timeline">
          <div 
            v-for="exp in experience" 
            :key="exp.id"
            class="timeline-item"
          >
            <div class="timeline-date">{{ exp.period }}</div>
            <div class="timeline-content">
              <h3 class="timeline-title">{{ exp.position }}</h3>
              <h4 class="timeline-subtitle">{{ exp.company }}</h4>
              <p class="timeline-description">{{ exp.description }}</p>
              <ul class="achievement-list" v-if="exp.achievements">
                <li v-for="achievement in exp.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 技能专长 -->
      <section class="resume-section">
        <h2 class="section-title">
          <span class="section-icon">⚡</span>
          {{ $t('resume.skills') }}
        </h2>
        <div class="skills-grid">
          <div 
            v-for="skillCategory in skills" 
            :key="skillCategory.category"
            class="skill-category"
          >
            <h3 class="skill-category-title">{{ skillCategory.category }}</h3>
            <div class="skill-list">
              <div 
                v-for="skill in skillCategory.items" 
                :key="skill.name"
                class="skill-item"
              >
                <div class="skill-name">{{ skill.name }}</div>
                <div class="skill-bar">
                  <div 
                    class="skill-progress" 
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
                <div class="skill-level">{{ skill.level }}%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 发表论文 -->
      <section class="resume-section">
        <h2 class="section-title">
          <span class="section-icon">📚</span>
          {{ $t('resume.publications') }}
        </h2>
        <div class="publications-list">
          <div 
            v-for="pub in publications" 
            :key="pub.id"
            class="publication-item"
          >
            <div class="publication-year">{{ pub.year }}</div>
            <div class="publication-content">
              <h3 class="publication-title">{{ pub.title }}</h3>
              <p class="publication-authors" v-html="pub.authors"></p>
              <p class="publication-venue">{{ pub.venue }}</p>
              <div class="publication-actions" v-if="pub.doi || pub.url">
                <a 
                  v-if="pub.doi" 
                  :href="'https://doi.org/' + pub.doi" 
                  target="_blank" 
                  class="btn btn-outline"
                >
                  DOI
                </a>
                <a 
                  v-if="pub.url" 
                  :href="pub.url" 
                  target="_blank" 
                  class="btn btn-outline"
                >
                  PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// 使用 Composition API 的 i18n
const { locale, messages } = useI18n()

// 计算属性 - 从 i18n 数据中获取
const education = computed(() => {
  const currentMessages = messages.value?.[locale.value]
  return currentMessages?.resume?.educationData || []
})

const experience = computed(() => {
  const currentMessages = messages.value?.[locale.value]
  return currentMessages?.resume?.experienceData || []
})

const skills = computed(() => {
  const currentMessages = messages.value?.[locale.value]
  return currentMessages?.resume?.skillsData || []
})

const publications = computed(() => {
  const currentMessages = messages.value?.[locale.value]
  return currentMessages?.resume?.publicationsData || []
})

// 方法
const downloadPDF = () => {
  // 这里可以添加下载PDF简历的逻辑
  alert('PDF下载功能待实现')
}
</script>

<style scoped>
.resume {
  max-width: 1000px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.resume-section {
  margin-bottom: 4rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--primary-color);
}

.section-icon {
  font-size: 2.5rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  gap: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary-color);
  border: 3px solid white;
  box-shadow: 0 0 0 3px var(--primary-color);
}

.timeline-date {
  min-width: 120px;
  font-weight: bold;
  color: var(--primary-color);
  font-size: 1.1rem;
}

.timeline-content {
  flex: 1;
  background: var(--light-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.timeline-subtitle {
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.timeline-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-details {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.detail-tag {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
}

.achievement-list {
  margin: 0;
  padding-left: 1.5rem;
}

.achievement-list li {
  margin-bottom: 0.5rem;
  color: var(--text-light);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: var(--light-bg);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.skill-category-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.skill-item {
  display: grid;
  grid-template-columns: 1fr 2fr auto;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}

.skill-name {
  font-weight: 500;
  color: var(--text-color);
}

.skill-bar {
  background: #e0e0e0;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  height: 100%;
  transition: width 0.3s ease;
}

.skill-level {
  font-size: 0.875rem;
  color: var(--text-light);
  min-width: 40px;
  text-align: right;
}

.publications-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.publication-item {
  display: flex;
  gap: 2rem;
  background: var(--light-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.publication-year {
  min-width: 80px;
  font-weight: bold;
  color: var(--primary-color);
}

.publication-content {
  flex: 1;
}

.publication-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.publication-authors {
  color: var(--text-light);
  margin-bottom: 0.25rem;
}

.publication-venue {
  color: var(--primary-color);
  font-style: italic;
  margin-bottom: 1rem;
}

.publication-actions {
  display: flex;
  gap: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .page-title {
    font-size: 2.25rem;
  }

  .timeline-item {
    flex-direction: column;
    gap: 1rem;
  }

  .timeline-date {
    min-width: auto;
  }

  .skill-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .skill-level {
    text-align: left;
  }

  .publication-item {
    flex-direction: column;
    gap: 1rem;
  }

  .publication-year {
    min-width: auto;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style> 