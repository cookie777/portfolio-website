import Image from 'next/image'

export function NavBarBottomButton({ path, menuName }) {
  return (
    <div>
      <Image
        src={`/icons/navbar/${path}.svg`}
        alt={menuName}
        width={24}
        height={24}
      />
      <p>{menuName}</p>
    </div>
  )
}