import parseQuery from "@/utils/parseQuery";

export default async function getWP(path, query) {
  try {
    const url = `/${path}` + `?${parseQuery(query)}`;
    const response = await this.$axios.get(url);
    const { data = [], headers = {} } = response;
    return { data, headers };
  } catch (error) {
    return { error };
  }
}
