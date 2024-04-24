import { SkeletonContainer, SkeletonLoading } from './styles'
export function Skeleton() {
  const gerarLoading = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <SkeletonContainer>
      {gerarLoading.map((loading) => {
        return <SkeletonLoading key={loading} />
      })}
    </SkeletonContainer>
  )
}
