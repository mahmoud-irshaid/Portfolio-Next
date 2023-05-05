import Image from 'next/image';

export interface FloatingImagesProps {
	altText: string;
	mainImage: string;
	topFloatingImage: string;
	bottomFloatingImage: string;
}

const FloatingImages = ({
	altText,
	mainImage,
	topFloatingImage,
	bottomFloatingImage,
}: FloatingImagesProps) => {
	return (
		<div className="relative inline-block w-auto">
			<Image src={mainImage} width={500} height={300} alt={altText} style={{ margin: '-5% -5% 0 -5%', width: '100%', maxWidth: 400 }} />
			{topFloatingImage &&
				<div className="animate-hover absolute left-24 top-0 z-30 w-1/2 md:left-32">
					<Image
						src={topFloatingImage}
						width={165}
						height={105}
						alt={altText}
						className="z-30"
					/>
				</div>
			}
			{bottomFloatingImage &&
				<div className="animate-hover animation-delay absolute bottom-0 right-12 z-30 w-1/2 md:right-20">
					<Image
						src={bottomFloatingImage}
						width={165}
						height={105}
						alt={altText}
					/>
				</div>
			}
		</div>
	);
};

export { FloatingImages };
