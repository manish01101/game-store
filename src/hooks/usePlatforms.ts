import platform from "../data/platform";

interface Platform {
  id: number,
  name: string,
  slug: string,
}

const usePlaforms = () => ({ data: platform, error: null, isLoading: false })


export default usePlaforms;