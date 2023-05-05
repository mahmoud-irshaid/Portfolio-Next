import type { ReactNode } from 'react';

export interface SocialIconsProps {
	profiles: Array<{
		url: string;
		name: string;
		icon: ReactNode;
		mail?: boolean;
	}>;
}

const SocialIcons = ({ profiles }: SocialIconsProps) => {
	return (
		<ul className="flex gap-6">
			{profiles.map(({ url, name, icon, mail }) => (
				<li
					className="text-2xl opacity-70 transition hover:opacity-100"
					key={name}
				>
					<a href={mail ? "mailto:mahmoudirshaid10@gmail.com" : url} target="_blank" rel="noopener noreferrer" title={name}>
						{icon}
					</a>
				</li>
			))}
		</ul>
	);
};

export { SocialIcons };
