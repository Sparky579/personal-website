<template>
  <div class="honors">
    <div class="page-header">
      <h1 class="page-title">{{ $t('honors.title') }}</h1>
      <p class="page-subtitle">{{ $t('honors.subtitle') }}</p>
    </div>

    <div class="filter-section">
      <div class="filter-buttons">
        <button 
          v-for="category in categories" 
          :key="category.key"
          :class="['filter-btn', { active: activeCategory === category.key }]"
          @click="setActiveCategory(category.key)"
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <div class="honors-grid">
      <div 
        v-for="honor in filteredHonors" 
        :key="honor.id"
        class="honor-card"
      >

        
        <div class="honor-content">
          <div class="honor-header">
            <h3 class="honor-title">
              <a v-if="honor.link" :href="honor.link" target="_blank" class="honor-link">
                {{ honor.title }}
              </a>
              <span v-else>{{ honor.title }}</span>
            </h3>
            <div class="honor-date">{{ honor.date }}</div>
          </div>
          
          <div class="honor-organization">{{ honor.organization }}</div>
          
          <p class="honor-description">{{ honor.description }}</p>
          
          <div class="honor-level" :class="honor.level">
            <span class="level-indicator"></span>
            <span class="level-text">{{ getLevelText(honor.level) }}</span>
          </div>
          

        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

// 使用 Composition API 的 i18n
const { locale, messages } = useI18n()

// 响应式数据
const activeCategory = ref('all')

// 计算属性 - 从 i18n 数据中获取
const categories = computed(() => {
  const currentMessages = messages.value?.[locale.value]
  return currentMessages?.honors?.categories || []
})

const honors = computed(() => {
  const currentMessages = messages.value?.[locale.value]
  return currentMessages?.honors?.honorsData || []
})

const levels = computed(() => {
  const currentMessages = messages.value?.[locale.value]
  return currentMessages?.honors?.levels || {}
})

const filteredHonors = computed(() => {
  return honors.value
    .filter(honor => activeCategory.value === 'all' || honor.category === activeCategory.value)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
})

// 方法
const setActiveCategory = (category) => {
  activeCategory.value = category
}

const getLevelText = (level) => {
  return levels.value[level] || level
}
</script>

<style scoped>
.honors {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--text-light);
}

.filter-section {
  margin-bottom: 3rem;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--primary-color);
  background: transparent;
  color: var(--primary-color);
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--primary-color);
  color: white;
}

.honors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.honor-card {
  background: var(--light-bg);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  border-left: 4px solid var(--primary-color);
}

.honor-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}



.honor-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.honor-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  flex: 1;
}

.honor-link {
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

.honor-link:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}

.honor-date {
  font-size: 0.9rem;
  color: var(--text-light);
  white-space: nowrap;
}

.honor-organization {
  font-size: 1.1rem;
  color: var(--secondary-color);
  font-weight: 500;
  margin-bottom: 1rem;
}

.honor-description {
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.honor-level {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.level-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.honor-level.international .level-indicator {
  background: #FFD700;
}

.honor-level.national .level-indicator {
  background: #C0C0C0;
}

.honor-level.regional .level-indicator {
  background: #CD7F32;
}

.honor-level.university .level-indicator {
  background: var(--primary-color);
}

.level-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-light);
}

.honor-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}



/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.25rem;
  }

  .honors-grid {
    grid-template-columns: 1fr;
  }

  .honor-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .honor-date {
    white-space: normal;
  }

  .filter-buttons {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }

  .filter-btn {
    white-space: nowrap;
  }
}
</style> 