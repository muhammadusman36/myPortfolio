import Section_1 from '@/components/Home/Section_1'


export default async function Home() {

  async function getContributions(): Promise<number> {
    try {
      const response = await fetch('https://api.github.com/users/UsmanMERN/repos', {
        next: { revalidate: 43200 }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
      }
      const data = await response.json();
      return data.length;
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      throw error;
    }
  }
  const contributions = await getContributions();


  return (
    <>
      <Section_1 contributions={contributions} />
    </>
  )
}
