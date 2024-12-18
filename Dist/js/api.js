async function fetchRepos() {
  try {
    const reposContainer = document.getElementById('repos');
    const fragment = document.createDocumentFragment();

    // Fetch data dari API GitHub
    const response = await fetch('https://api.github.com/users/npma7/repos');
    const repos = await response.json();

    // Filter repositori yang tidak forked
    const nonForkedRepos = repos.filter(repo => !repo.fork);

    // Fungsi untuk membuat card repo
    const createRepoCard = ({ name, description, stargazers_count, forks_count, language, html_url }) => {
      const card = document.createElement('div');
      card.className = 'repo-data';
      card.innerHTML = `
        <h3 class="repo-name">${name}</h3>
        <p class="repo-desc">${description || 'No description available'}</p>
        <div class="repo-stats">
          <span><i class="fas fa-star"></i>${stargazers_count}</span>
          <span><i class="fas fa-code-branch"></i>${forks_count}</span>
          <span><i class="fas fa-code"></i>${language || 'N/A'}</span>
        </div>
      `;
      card.onclick = () => window.open(html_url, '_blank');
      return card;
    };

    // Buat card untuk setiap repo
    nonForkedRepos.forEach(repo => {
      fragment.appendChild(createRepoCard(repo));
    });

    reposContainer.appendChild(fragment);

  } catch (error) {
    console.error('Error fetching repos:', error);
  }
}

// Panggil fungsi fetchRepos setelah DOM siap
document.addEventListener('DOMContentLoaded', fetchRepos);
