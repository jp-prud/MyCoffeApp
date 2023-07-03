export interface CelebrationProps {
  id: string;
  name: string;
  images: [
    {
      url: string;
      alt: string;
    },
  ];
}
