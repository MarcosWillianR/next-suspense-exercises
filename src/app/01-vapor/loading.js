import { range } from '@/utils'
import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';

const fakeCards = range(12)

export default function Loading() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>
      <div className="game-grid">
        {fakeCards.map((data) => (
          <LibraryGameCardSkeleton key={data} />
        ))}
      </div>
    </section>
  )
}