package su.kami.Moyennoiseee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
//@MapperScan("su.kami.mapper")
@SpringBootApplication
public class MoyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MoyApplication.class, args);
    }

}
