import Image from 'next/image'

export function NavigationBottomButton({ path, menuName }) {
  return (
    <div>
      <Image
        src={`/icons/${path}.svg`}
        alt={menuName}
        width={24}
        height={24}
      />
      <p>{menuName}</p>
    </div>
  )
}