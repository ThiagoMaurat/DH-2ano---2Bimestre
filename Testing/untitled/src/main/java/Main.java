import java.util.Arrays;

public class Main {
    public static boolean isAnagram(String s1, String s2) {
        //se as duas strings não tem o mesmo tamanho, não é anagrama
        if ( s1.length() != s2.length() ) {
            return false;
        }
        //tranfroma em arrays para poder ordenar
        char[] c1 = s1.toCharArray();
        char[] c2 = s2.toCharArray();
        //ordena para garantir a comparação simplificada
        Arrays.sort(c1);
        Arrays.sort(c2);
        //cria as novas strings baseadas nos arrays ordenados
        String sc1 = new String(c1);
        String sc2 = new String(c2);
        return sc1.equals(sc2);
    }
    public static void main(String[] args){
            System.out.println(isAnagram("ACT", "ATC"));
    }
}
