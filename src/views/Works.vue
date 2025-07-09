<template>
  <div class="works">
    <div class="page-header">
      <h1 class="page-title">{{ $t('works.title') }}</h1>
      <p class="page-subtitle">{{ $t('works.subtitle') }}</p>
    </div>

    <div class="filter-tabs">
      <button 
        v-for="category in categories" 
        :key="category.key"
        :class="['filter-btn', { active: activeCategory === category.key }]"
        @click="setActiveCategory(category.key)"
      >
        {{ $t(`works.categories.${category.key}`) }}
      </button>
    </div>

    <div class="works-grid">
      <div 
        v-for="work in filteredWorks" 
        :key="work.id"
        class="work-card"
      >
        <div class="work-content">
          <h3 class="work-title">{{ work.title }}</h3>
          <p class="work-description">{{ work.description }}</p>
          
          <div class="work-tech">
            <span class="tech-label">{{ $t('works.techStack') }}:</span>
            <div class="tech-tags">
              <span 
                v-for="tech in work.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          
          <div class="work-actions">
            <button 
              :disabled="!work.projectLinkEnabled" 
              class="btn btn-primary"
              :class="{ disabled: !work.projectLinkEnabled }"
              @click="work.projectLinkEnabled && openProjectLink(work.projectUrl)"
            >
              {{ $t('works.projectLink') }}
            </button>
            
            <button 
              v-if="work.images && work.images.length > 0"
              class="btn btn-outline"
              @click="toggleImages(work.id)"
            >
              {{ work.showImages ? $t('works.hideImages') : $t('works.showImages') }}
            </button>
          </div>
          
          <!-- 展开的图片显示区域 -->
          <div class="work-images-expanded" v-if="work.showImages && work.images && work.images.length > 0">
            <div class="images-grid">
              <img 
                v-for="(image, index) in work.images" 
                :key="index"
                :src="getImagePath(image)" 
                :alt="work.title + ' - 图片 ' + (index + 1)"
                class="expanded-img"
                @error="onImageError"
                @click="openImageModal(getImagePath(image), work.title + ' - 图片 ' + (index + 1))"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 图片放大遮罩层 -->
    <div 
      v-if="showModal" 
      class="image-modal"
      @click="closeImageModal"
    >
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeImageModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <img 
          :src="modalImage" 
          :alt="modalAlt"
          class="modal-image"
          @error="onImageError"
        />
        <p class="modal-caption">{{ modalAlt }}</p>
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
const activeCategory = ref('academic')

// 分类配置
const categories = ref([
  { key: 'academic' },
  { key: 'development' },
  // { key: 'other' }
])

// 只保留图片显示状态，其他数据都来自 i18n
const projectsImageState = ref({})

// 图片模态框状态
const showModal = ref(false)
const modalImage = ref('')
const modalAlt = ref('')

// 计算属性 - 直接使用 i18n 数据
const works = computed(() => {
  const currentMessages = messages.value?.[locale.value]
  const projectsData = currentMessages?.works?.projects
  
  if (!projectsData || !Array.isArray(projectsData)) {
    return []
  }
  
  return projectsData.map((project, index) => ({
    ...project,
    id: index + 1,
    showImages: projectsImageState.value[index] || false
  }))
})

// 过滤后的作品
const filteredWorks = computed(() => {
  return works.value.filter(work => work.category === activeCategory.value)
})

// 方法
const setActiveCategory = (category) => {
  activeCategory.value = category
}

const getImagePath = (imageName) => {
  try {
    return require(`@/assets/images/works/${imageName}`)
  } catch (e) {
    console.warn(`Image not found: ${imageName}`)
    return null
  }
}

const onImageError = (event) => {
  event.target.style.display = 'none'
}

const openProjectLink = (url) => {
  if (url) {
    window.open(url, '_blank')
  }
}

const toggleImages = (workId) => {
  const index = workId - 1 // ID 从 1 开始，数组索引从 0 开始
  projectsImageState.value[index] = !projectsImageState.value[index]
}

// 图片模态框方法
const openImageModal = (imageSrc, imageAlt) => {
  if (imageSrc) {
    modalImage.value = imageSrc
    modalAlt.value = imageAlt
    showModal.value = true
    // 防止页面滚动
    document.body.style.overflow = 'hidden'
  }
}

const closeImageModal = () => {
  showModal.value = false
  modalImage.value = ''
  modalAlt.value = ''
  // 恢复页面滚动
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.works {
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

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
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

.works-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.work-card {
  background: var(--light-bg);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.work-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.work-content {
  text-align: left;
  width: 100%;
}

.work-images-expanded {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.expanded-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  cursor: pointer;
}

.expanded-img:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-hover);
}

.work-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.work-description {
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.work-tech {
  margin-bottom: 2rem;
}

.tech-label {
  font-weight: bold;
  color: var(--text-color);
  display: block;
  margin-bottom: 0.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
}

.work-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.work-actions .btn.disabled {
  background: #ccc;
  color: #666;
  cursor: not-allowed;
  border-color: #ccc;
}

.work-actions .btn.disabled:hover {
  background: #ccc;
  color: #666;
  transform: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.25rem;
  }

  .work-card {
    text-align: center;
  }

  .filter-tabs {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }

  .filter-btn {
    white-space: nowrap;
  }

  .work-actions {
    flex-direction: column;
  }

  .work-actions .btn {
    text-align: center;
  }

  .images-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .expanded-img {
    height: 220px;
  }
}

/* 图片模态框样式 */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: scaleIn 0.3s ease;
}

.modal-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;
}

.modal-close:hover {
  background: white;
  transform: scale(1.1);
}

.modal-close svg {
  color: #333;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.modal-caption {
  color: white;
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
  max-width: 600px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* 移动端模态框样式优化 */
@media (max-width: 768px) {
  .modal-content {
    max-width: 95vw;
    max-height: 95vh;
  }
  
  .modal-close {
    top: -40px;
    width: 36px;
    height: 36px;
  }
  
  .modal-image {
    max-height: 75vh;
  }
  
  .modal-caption {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
}
</style> 