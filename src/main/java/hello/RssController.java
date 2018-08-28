package hello;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RssController {

    @GetMapping("/rss")
    //Make this code to retrieve an rss feed, and then return an xml string
    //Make a getRss method or use someone elses code
    //use model.addAttribute to map it to a parameter that is being used by the method that runs before the page is returned
    //use the same parameter value in the html template
    
//    public String getRss(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//        model.addAttribute("name", name);
//        return "rss";
//    }
    
    public String getRss(Model model) {
    	ArrayList<Episode> episodes = new ArrayList<>();
    	FeedReader feedReader = new FeedReader();
    	episodes = feedReader.parseRssXmlIntoEpisodes();
        model.addAttribute("episodes", episodes);
        return "rss";
    }
    
    

}