<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="contact-links">
          <a :href="contactInfo.school.url" target="_blank" class="contact-link">
            <span class="icon">🏫</span>
            <span>{{ $t('common.school') }}: {{ contactInfo.school.name }}</span>
          </a>
          <a :href="'mailto:' + contactInfo.email" class="contact-link">
            <span class="icon">📧</span>
            <span>{{ $t('common.email') }}: {{ contactInfo.email }}</span>
          </a>
          <a :href="contactInfo.orcid.url" target="_blank" class="contact-link">
            <span class="icon">🆔</span>
            <span>{{ $t('common.orcid') }}: {{ contactInfo.orcid.id }}</span>
          </a>
          <a :href="contactInfo.github.url" target="_blank" class="contact-link">
            <span class="icon">💻</span>
            <span>{{ $t('common.github') }}: {{ contactInfo.github.username }}</span>
          </a>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} {{ contactInfo.name }}. {{ $t('footer.allRightsReserved') }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  computed: {
    contactInfo() {
      return {
        name: 'Sparky327(Cheng Sizhe)',
        school: {
          name: this.$t('info.school'),
          url: 'https://www.ntu.edu.sg/'
        },
        email: this.$t('info.email'),
        orcid: {
          id: '0009-0001-2474-9230',
          url: 'https://orcid.org/0009-0001-2474-9230'
        },
        github: {
          username: 'Sparky',
          url: this.$t('info.github')
        }
      }
    }
  }
}
</script>

<style scoped>
.footer {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--border-color);
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.footer-content {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(102, 126, 234, 0.05);
}

.contact-link:hover {
  color: var(--primary-color);
  background: rgba(102, 126, 234, 0.1);
  transform: translateY(-2px);
}

.contact-link .icon {
  font-size: 1.2rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-light);
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-container {
    padding: 1.5rem 1rem;
  }

  .contact-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .contact-link {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style> 