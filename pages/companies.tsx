import { Company } from '../types/company';

export default function CompaniesPage() {
  const companies: Company[] = []
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Companies</h1>
      <ul>
        {companies.map((company) => (
          <li
            key={company.id}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              marginBottom: '1rem',
            }}
          >
            <div>
              <strong>{company.name}</strong> — {company.industry}
            </div>
            <div>
              {company.enrichedPosts
                ? `Enriched with ${company.enrichedPosts.length} posts`
                : 'Not enriched yet'}
            </div>
            <button
              style={{ marginTop: '0.5rem' }}
            >
              Enrich Posts
            </button>
            {company.enrichedPosts && (
              <ul style={{ marginTop: '0.5rem' }}>
                {company.enrichedPosts.map((post) => (
                  <li key={post.id}>
                    <strong>{post.title}</strong>: {post.body}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
